import React from 'react';
import Image from 'react-native';

function IconHeader() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/Pokemon_logo.png')}
        />
    );
}

export {IconHeader};

