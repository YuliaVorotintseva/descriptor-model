import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default function TopBar(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Descriptor model
            </Typography>
            {props.isAuthenticated ? <Button color="inherit" onClick={()=>props.logout()}>Logout</Button> : null}
          </Toolbar>
        </AppBar>
      </div>
    )
  }