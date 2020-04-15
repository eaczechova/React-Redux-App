import styled, { keyframes } from 'styled-components';

// ANIMATION ON USER DATA LOAD

export const appear = keyframes`
  	0% {
		opacity: 0;
		top: 35px;
	}
	100% {
		opacity: 1;
		top: 0;
	}
`;

export const MainHeader = styled.h1`
	font-size: 4rem;
	text-align: center;
	margin-top: 4rem;
	padding: 3rem;
	color: #fff;
	// border: 1px solid red;
`;

export const Wrapper = styled.div`
	margin: 100px auto;
	max-width: 290px;
	background-color: #fafafa;
	box-shadow: 0 15px 20px -11px #683444;
`;

export const LoadingWrapper = styled.div``;

export const Card = styled.div`
	padding: 10px;
	position: relative;
	animation: ${appear} 1s ease;
`;

export const ImageWrapper = styled.div`
	text-align: center;
	margin: 50px;
`;

export const CardImage = styled.img`
	border-radius: 50%;
	width: 120px;
`;

export const CardDataWrapper = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: center;
`;

export const CardDataItem = styled.li`
	padding: 5px;
	font-size: 12px;

	&:first-child {
		font-weight: bold;
		font-size: 18px;
	}
`;

export const ButtonWrapper = styled.div`
	color: #683444;
	display: flex;	
}`;

export const Button = styled.button`
	display: inline-block;
	margin: 40px auto;
	width: 200px;
	padding: 15px;
	border-radius: 7px;
	border: none;
	background: #8c6cc4;
	color: #fff;
	padding: 12px;
	box-shadow: 0 10px 20px - 11px #683444;
	cursor: pointer;
	transform: scale(1.05);
	transition: transform 2s;

	&:hover {
	transform: scale(1);

	&:focus {
		outline: none;
	}
`;
