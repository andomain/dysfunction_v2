import React from 'react'
import PropTypes from 'prop-types'

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: [],
        }
        this.xml = null;
        this.maxPosts = props.max
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.props.url);
        xhr.onload = (e) => {
            this.processFeed(e.currentTarget.responseXML);
        }
        xhr.send();

    }

    processFeed(response) {
        let items = Array.from(response.getElementsByTagName('item'));
        items = items.slice(0, this.maxPosts);

        const episodes = items.map((node) => {
            let link = node.children[3].innerHTML.replace('<![CDATA[','');
            link = link.replace(']]>','');
            
            return {
                title: node.children[0].innerHTML,
                url: link,
                date: new Date(node.children[1]),
            }
        });
        this.setState({episodes});
    }

    render(){
        const episodes = this.state.episodes.map((ep, index) => <Episode key={index} text={ep.title} url={ep.url} />);
        return <section id={this.props.id} className="feed">
            <h3>Recent Episodes</h3>
                {episodes}
            </section>
    }
}

const Episode = (props) => (
    <article key={props.id} className="feed-item">
        <a href={props.url} target="_blank">{props.text}</a>
    </article>
)