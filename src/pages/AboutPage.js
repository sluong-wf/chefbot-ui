import React from 'react';
import WaggingDog from '../components/WaggingDog';
import StripedCat from '../components/StripedCat';

const AboutPage = () => {
    const styles = {
        animalsContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "30px",
        },
    }

    return (
        <div>
            <h1>About</h1>
            <p>Created by Shayla 💛</p>
            <div style={styles.animalsContainer}>
                <WaggingDog/>
                <StripedCat/>
            </div>
        </div>
    );
};

export default AboutPage;
