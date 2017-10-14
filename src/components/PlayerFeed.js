import React from 'react'
import PropTypes from 'prop-types'
// import Player from './Player'

export default class PlayerFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: [],
            pointer: 0,
        }
        this.xml = null;
        this.pageSize;
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.props.url);
        xhr.onload = (e) => {
            this.xml = e.currentTarget.responseXML
            this.processFeed(this.xml);
        }
        xhr.send();

    }

    processFeed(xml) {
        let items = Array.from(xml.getElementsByTagName('item'));

        console.log(items);

        const episodes = items.map((node) => {
            let link = node.children[3].innerHTML.replace('<![CDATA[','');
            link = link.replace(']]>','');
            
            let date = new Date(node.children[1].innerHTML);
            // date = date.replace(" GMT.*", "");
            // console.log(date);

            return {
                title: node.children[0].innerHTML,
                url: link,
                date: new Date(node.children[1].innerHTML),
                desc: node.children[5].innerHTML.replace("]]>", ""),
            }
        });
        this.setState({episodes});
    }

    // TO DO : succesfully work out a way to render Libsyn players using unique ep IDs
    render(){
        // const episodes = this.state.episodes.map((ep, index) => <Player key={index} id={17187845} color="87A93A" url={ep.url} height={90} width={640}/>);
        const episodes = this.state.episodes.map((ep, index) => 
            <Episode key={index} title={ep.title} url={ep.url} date={ep.date} desc={ep.desc} />
        );
        return <div id={this.props.id} className="episode-feed">
                {episodes}
            </div>
    }
}

const Episode = (props) => (
    <article className="episode">
        <h3 className="episode-title">{props.title}</h3>
        <span className="episode-date">{props.date.toDateString()}</span>
        <a className="episode-link" href={props.url} target="_blank">Listen Here</a>
        <p className="episode-body" dangerouslySetInnerHTML={{__html: props.desc}}></p>
    </article>
)