import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Message extends React.Component {
    render(){ 
        return  <Card>
                <CardTitle title="Preventive Screenings" subtitle="Why they are so important!" />
                <CardText>
                    Getting routine screenings is the most important thing you can do to keep yourself healthy - and they're free services under your plan. 
                </CardText>
            </Card>
        }    
}


export default Message;
