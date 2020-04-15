import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const RandomUser = (props) => {
	return (
		<div className="wrapper">
			{props.isLoading ? (
				<div>Loading</div>
			) : (
				<>
					{props.error && <div>{props.error}</div>}
					<main>
						{props.user.map((data) => {
							return (
								<div key={data.id.value} className="card">
									<div className="card-img-wrapper">
										<img src={data.picture.large} alt={data.gender} />
									</div>
									<ul className="card-data-wrapper">
										<li>{`${data.name.first} ${data.name.last}`}</li>
										<li>{data.email}</li>
										<li>{`${data.location.city}, ${data.location.country}`}</li>
										<li>{data.phone}</li>
									</ul>
								</div>
							);
						})}
						<div className="wrapper-button">
							<button onClick={() => props.fetchData()}>Get User</button>
						</div>
					</main>
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
		isLoading: state.isLoading,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchData })(RandomUser);
