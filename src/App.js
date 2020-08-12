import React from 'react';
import Home from './components/home';
import { 
  Layout, 
  Menu
} from 'antd';

import { connect } from 'react-redux';
import { startSetCountries } from './actions/countriesAction';
import { startSetCities } from './actions/citiesAction';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

let newCountries = [];
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

componentDidMount(){  
  this.props.startSetCountries()
}

handleClick = (value) => {  
  if(this.props.countries){
    const key = Object.keys(this.props.countries).find(key => this.props.countries[key] === value);   
    if(key){
      this.props.startSetCities(key);
    }
  }
}

  render(){
    let countries = [];   
    if(this.props.countries && this.props.countries){
     let count = this.props.countries         
     for(var key in count){             
        countries.push(count[key])       
        newCountries = countries.slice(0,20)                   
     }
    }
    return ( 
      <>
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background:'' }}>
              <div className="logo" style={{color: "red"}}>Weather Data</div>
            </Header>
              <Sider
                style={{
                  overflow: 'auto',
                  height: '100vh',
                  position: 'fixed',
                  left: 0,
                  top: '15px',                  
                }}
              >
                <br/><br/> <br/><br/>        
                <Menu theme="dark" mode="inline"  style={{background:''}}>
                 {newCountries && newCountries.length !== 0 ? newCountries.map((country, index) =>
                 <Menu.Item key={index} onClick={()=> this.handleClick(country)}>                      
                      <span className="nav-text">{country}</span>
                  </Menu.Item>    
                  ) : null}           
                </Menu>
              </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0px 0px 0', overflow: 'initial' }}>
              <div style={{ background: '#fff', textAlign: 'center' }}>
                {
                  this.props.cities ? <Home /> : null
                } 
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Design Created By D Samal</Footer>
          </Layout>
      </Layout>
    </>  
    );    
  }  
}

const mapDispatchToProps = {
  startSetCountries,
  startSetCities
}

const mapStateToProps = (state) => { 
  return {
     countries: state.countries,
     cities: state.cities     
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
