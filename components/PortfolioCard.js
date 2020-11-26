import React from "react";
import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";

const PortfolioCard = ({ portfolio, children }) => {
  return (
    <Card className="portfolio-card">
      <CardHeader className="portfolio-card-header">
        {portfolio.jobTitle}
      </CardHeader>
      <CardBody className="portfolio-card-body">
        <p className="portfolio-card-city">{portfolio.location}</p>
        <CardTitle className="portfolio-card-title">
          {portfolio.title}
        </CardTitle>
        <CardText className="portfolio-card-text">
          {portfolio.description}
        </CardText>
        {children}
      </CardBody>
    </Card>
  );
};

export default PortfolioCard;
