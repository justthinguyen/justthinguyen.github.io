import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
	<div>
		<p>Welcome to Thi Nguyen home page</p>
		<p>Coding <Link to={'/coding/'}></Link>.</p>
        <p>Resume <Link to={'/resume/'}></Link>.</p>
	</div>
);
export default Home;