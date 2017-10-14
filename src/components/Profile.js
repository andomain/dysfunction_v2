import React from 'react'

const Profile = (props) => {
    return <div className="profile">
        <img className="profile-image" src={props.image} alt={props.name} />
        <div className="profile-info">
            <h3 className="profile-title">{props.name}</h3>
            <p className="profile-strap">"{props.strap}"</p>
            <p className="profile-bio">{props.bio}</p>
        </div>
    </div>
}

export default Profile;