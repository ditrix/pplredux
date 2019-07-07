import React from 'react';
import logo from './logo.svg';
export default function AskoHeader(){
	return(	
		<>
		<div><img src={logo} className="App-logo" alt="logo" /></div>
    <div className="header-phones"><h1>0-800-50-15-60</h1><p>безкоштовна багатоканальна телефонна лінія</p></div>
    <div className="header-phones"><h1>050-450-15-60</h1><p>вартість дзвінків відповідно до тарифів Вашого оператора</p></div>
    </>
    )

}