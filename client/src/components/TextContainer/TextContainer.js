import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>

        </div>

        { users
            ? (
                <div>
                    <h1>Person currently chatting: </h1>
                    <div className="activeContainer">
                        <h2>
                            {users.map(({name}) => (
                                <div key={name} className="activeItem">
                                    {name}
                                    <img src={onlineIcon} alt="Online Icon" />
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            )
            : null
        
        
        }


    </div>


)

export default TextContainer;