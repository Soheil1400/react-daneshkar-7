import {Button, Grid, Typography} from "@mui/material";
import rowTable from "../../data/home/rowTable";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/slice/contact.reducer";
import {Link} from 'react-router-dom'

const TableRow = ({contact}) => {
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteContact(id))
    }

    return(
        <Grid container alignItems={'center'} flexDirection={'row'} p={2}>
            {rowTable.map(row => (
                <Grid item xs={1.5} p={2} key={row.id}>
                    <Typography>
                        {row.title.toUpperCase()}: {contact[row.title]}
                    </Typography>
                </Grid>
            ))}
            <Grid p={2}>
                <Button variant={'outlined'} color={'error'}  onClick={()=>handleDelete(contact.id)} sx={{borderRadius:2}}>
                    DELETE
                </Button>
            </Grid>
            <Grid p={2}>
                <Button variant={'outlined'} sx={{borderRadius:2}}>
                    INFO
                </Button>
            </Grid>
            <Grid p={2}>
                <Link to={`/updateContact/${contact.id}`}>
                    <Button variant={'outlined'} color={'secondary'} sx={{borderRadius:2}}>
                        UPDATE
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default TableRow