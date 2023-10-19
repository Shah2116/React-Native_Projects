import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { PropsWithChildren } from 'react';

 
type IconProp = PropsWithChildren<{
    name: string;
}>

const Icons =({name}: IconProp) => {
 switch (name) {
    case 'circle':
        return <Icon name="circle-thin"  size={28} color='#ff3f34' />
        break;
        case 'cross':
            return <Icon name="times" size={28} color='#ffdd59'  />
            break;
 
    default:
        return <Icon name="times" size={28} color='#0be881'  />
 }

}

export default Icons;