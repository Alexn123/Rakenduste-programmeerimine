import { useEffect, useState } from 'react'
import { Table, Button } from 'antd';
//import {Context} from '../store';
//import { removePost } from '../store/actions'
import { Link } from 'react-router-dom';
import axios from'axios';

const ViewPosts = () => {
    const [response, setResponse] = useState();
    

    useEffect(() => {

    axios.get('http://localhost:8081/api/post')
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setResponse(response.data);
            
        });

    
    }, [])

    const columns = [
        {
            title: 'kasutaja',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: 'tiitel',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'kirjeldus',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'kuupäev',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'muuda',
            key: 'action',
            //delete - record - onclick - dispatch / imports
            render: () => (
                <div>
                    <Button>
                        Delete
                    </Button>
                    <Link to={`/edit/`}>
                        <Button>
                            Edit
                        </Button>
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Table dataSource={response} columns={columns} />;
        </div>
    )
}

export default ViewPosts;