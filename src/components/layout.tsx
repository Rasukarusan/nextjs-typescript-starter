// import
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
    },
  })
)

interface Props {
  children?: React.ReactNode
}
export const Layout = (props: Props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <Container fixed className={classes.root}>
      {children}
    </Container>
  )
}
