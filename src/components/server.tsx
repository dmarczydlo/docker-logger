import { IServer } from "../interfaces/docker";
import React from 'react';
import DockerBox from './dockerBox';
import { Card, CardContent, Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import grayColor from '@material-ui/core/colors/grey';

interface ServersProps {
    server: IServer,
    index: number
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardHeader: {
            marginBottom: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            textAlign: 'center',
            borderColor: grayColor[300],
            borderBottomStyle: 'solid',
            borderBottomWidth: 1
        },
        card: {
            marginBottom: '2rem'
        }
    }),
);


const Server: React.SFC<ServersProps> = ({ server, index }: ServersProps) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography  className={classes.cardHeader} variant="h5" component="h2">
                    {server.name}
                </Typography>
                <DockerBox list={server.list} index={index} />
            </CardContent>
        </Card>
    )
};

export default Server;