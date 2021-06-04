import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import {
	Wrapper,
	LoadingWrapper,
	Card,
	ImageWrapper,
	CardImage,
	CardDataWrapper,
	CardDataItem,
	ButtonWrapper,
	Button,
} from './styles';

const RandomUser = (props) => {
	return (
		<Wrapper>
			{props.isLoading ? (
				<LoadingWrapper className="progress-bar">
					<span></span>
				</LoadingWrapper>
			) : (
				<>
					{props.error && <div>{props.error}</div>}
					<main>
						{props.user.map((data) => {
							return (
								<Card key={data.id.value}>
									<ImageWrapper>
										<CardImage src={data.picture.large} alt={data.gender} />
									</ImageWrapper>
									<CardDataWrapper>
										<CardDataItem>{`${data.name.first} ${data.name.last}`}</CardDataItem>
										<CardDataItem>{data.email}</CardDataItem>
										<CardDataItem>{`${data.location.city}, ${data.location.country}`}</CardDataItem>
										<CardDataItem>{data.phone}</CardDataItem>
									</CardDataWrapper>
								</Card>
							);
						})}
						<ButtonWrapper>
							<Button onClick={() => props.fetchData()}>Get User</Button>
						</ButtonWrapper>
					</main>
				</>
			)}
		</Wrapper>
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
