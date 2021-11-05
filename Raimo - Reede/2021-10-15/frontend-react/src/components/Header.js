import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';



function Header(){

    const { Header } = Layout;

    return(
        <>
            <Header>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link to='/'>
                            Koduleht
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/posts'>
                            Lisa postitusi
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/viewposts'>
                            vaata postitusi
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='register'>
                        <Link to='/register'>
                            Registreeri
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='login'>
                        <Link to='/login'>
                            Logi sisse
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </>
    );
}

export default Header;