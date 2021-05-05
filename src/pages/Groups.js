
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import {
    Grid,
    Card,
    CardContent,
    CardHeader
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({

    cardAvatar: {
        margin: theme.spacing(2),
        marginRight: theme.spacing(20),
        boxShadow: '0 2px 4px 0 rgba(138, 148, 159, 0.2)',
        '& > *:nth-child(1)': {
            marginRight: theme.spacing(2),
        },
        '& > *:nth-child(2)': {
            flex: 'auto',
            borderRadius: 12,
        }
    },
    cardContainer: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        marginBottom: theme.spacing(4),
        boxShadow: '0 4px 8px 2px rgba(138, 148, 159, 0.2)',
        '& > *:nth-child(1)': {
            marginRight: theme.spacing(2),
        },
        '& > *:nth-child(2)': {
            flex: 'auto',
            borderRadius: 24,
        }
    },
    avatar: {
        backgroundColor: blueGrey[500],
    },
    margin: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6)
    }
}))

const Groups = () => {
    const classes = useStyles()
    const data = [
        {
            groupName: "Gencosoft-1",
            groupDesc: "Gencosoft-1 Long Group Description",
            groupMembers: [
                {
                    memberName: "Arif",
                    memberAvatar: "Ar"
                }, {
                    memberName: "Mehmet",
                    memberAvatar: "Me"
                },
                {
                    memberName: "İbrahim",
                    memberAvatar: "İb"
                }
            ],
            earnings: 13000
        },
        {
            groupName: "Gencosoft-2",
            groupDesc: "Gencosoft-2 Long Group Description",
            groupMembers: [
                {
                    memberName: "Zeki",
                    memberAvatar: "Ze"
                }, {
                    memberName: "Ali",
                    memberAvatar: "Al"
                },
                {
                    memberName: "Ahmet",
                    memberAvatar: "Ah"
                }
            ],
            earnings: 13000
        },
        {
            groupName: "Gencosoft-3",
            groupDesc: "Gencosoft-3 Long Group Description",
            groupMembers: [
                {
                    memberName: "Gökbörü",
                    memberAvatar: "Gö"
                }, {
                    memberName: "Murat",
                    memberAvatar: "Mu"
                },
                {
                    memberName: "Aybey",
                    memberAvatar: "Ay"
                }
            ],
            earnings: 13000
        },
    ]
    return (
        <Grid

            container
            spacing={2}
            direction="column"
            justify="center"
            alignItems="center"
        >

            <Button className={classes.margin} type="submit"
                variant="contained"
                color="secondary">Add New Group</Button>

            <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
            >

                {data.map(elem => (
                    <Grid item xs={12} sm={12} md={8} key={data.indexOf(elem)}>
                        <Card className={classes.cardContainer}>

                            <CardHeader
                                title={elem.groupName}
                                subheader={elem.groupDesc}
                                action={
                                    <Button variant="contained"
                                        color="primary" aria-label="settings">
                                        View
                                    </Button>
                                }
                            />

                            <CardContent>{elem.groupMembers.map(member => (
                                <Card className={classes.cardAvatar}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar} >
                                                {member.memberAvatar}
                                            </Avatar>
                                        }
                                        title={member.memberName}
                                    />
                                </Card>

                            ))}</CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Groups
