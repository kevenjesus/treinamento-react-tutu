import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';

const TaskItem = props => (
    <ListItem key={props.item.id}>
        <ListItemText primary={props.item.name} secondary={props.item.status} />
    </ListItem>
);

export default TaskItem;