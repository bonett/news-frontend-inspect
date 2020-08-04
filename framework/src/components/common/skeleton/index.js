import React from 'react';

import Col from 'emerald-ui/lib/Col';
import SkeletonLoader from 'emerald-ui/lib/SkeletonLoader';

import './style.scss';

const SkeletonComponent = () => {
    return (
        <Col xs={12} sm={6} md={6} lg={6}>
            <article className="parent-content">
                <div className="parent-content__media">
                    <SkeletonLoader loading width="100%" height="141px" />
                </div>
                <div className="parent-content__caption">
                    <SkeletonLoader loading width="100%" height="20px" />
                    <SkeletonLoader loading width="100%" height="20px" />
                    <SkeletonLoader loading width="100%" height="20px" />
                    <SkeletonLoader loading width="100%" height="10px" />
                    <SkeletonLoader loading width="100%" height="10px" />
                    <SkeletonLoader loading width="100%" height="10px" />
                    <SkeletonLoader loading width="100%" height="10px" />
                    <SkeletonLoader loading width="100%" height="10px" />
                    <SkeletonLoader loading width="100%" height="10px" />
                </div>
            </article>
        </Col>
    );
};

export default SkeletonComponent;
