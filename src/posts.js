import * as React from "react";
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';


export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users"><TextField source="name" /></ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);