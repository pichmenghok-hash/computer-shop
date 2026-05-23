
// import React from 'react'
// import logo from './../../assets/logo.png'
// import { Outlet, useNavigate } from 'react-router-dom'
// function Layoutdashboard() {
//     const navigate = useNavigate()
//     const onClickMenu = (routeName) =>{
       
//         navigate(routeName)
//     }
//     // const BacktoClient = () => {
//     //     window.location.href = "/"
//     // }
//   return (
//     // <div>
//     //     <nav className="flex justify-between bg-pink-300" >
//     //         <div>
//     //             <img className="w-[100px] pt-[15px] ml-[30px]"
//     //                 src={logo} alt="Logo"
//     //                 onClick={() => onClickMenu ("/dashboard")} 
//     //             />
//     //         </div>
//     //         <div className="menu-content">
//     //             <ul className="flex ">
                
//     //                 <li onClick={() => onClickMenu ("/dashboard")} className="p-[20px] cursor-pointer">Home</li>
//     //                 <li onClick={() => onClickMenu ("/dashboard/customer")} className="p-[20px] cursor-pointer">customer</li>
//     //                 <li onClick={() => onClickMenu ("/dashboard/product")} className="p-[20px] cursor-pointer">Product</li>
//     //                 <li onClick={() => onClickMenu ("/dashboard/category")} className="p-[20px] cursor-pointer">Category</li>
//     //                 <li onClick={() => onClickMenu ("login")} className="p-[20px] cursor-pointer">Login</li>
//     //                 <li onClick={() => onClickMenu ("/")} className="p-[20px] cursor-pointer">Back Client </li>

//     //             </ul>
//     //         </div>
       
    
//     //     </nav>
//     //     <Outlet />
//     //     <footer className="bg-gray-700 w-full h-[200px] mt-10 flex justify-center   ">
//     //         <h1 className="text-green-400 t">Footer</h1>

//     //     </footer>
//     // </div>
    
//   )
// }

// export default Layoutdashboard
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const Layoutdashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'employee',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 5,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content<Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Layoutdashboard;