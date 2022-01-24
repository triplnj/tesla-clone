import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="teslamodels.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />


            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="teslamodely.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="teslamodel3.avif"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="teslamodelx.avif"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
                    <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solarpanels.avif"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                
                backgroundImg="accessories.avif"
                leftBtnText="Shop Now"
                
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
height: 100vh;
`