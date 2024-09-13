import React  from "react";
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';


const IconRenderer = ({iconName}) => {

    const [profile, icon] = iconName.split('/');
    
    let Icon = undefined;
    if(profile == "si"){
        Icon = SiIcons[icon]
    }
    if(profile == "fa"){
        Icon = FaIcons[icon]
    }
    if(profile == "fi"){
        Icon = FiIcons[icon]
    }

    return (
        <span>
            <Icon/>
        </span>
    )
}

export default IconRenderer;