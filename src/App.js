import React from 'react';
import Header from './AppComponents/Header';
import Body from './AppComponents/Body';

export default class App extends React.Component {

    render() {
        return(
        <div>
        <Header/>
        <Body/>
        </div>
        );
    }

}