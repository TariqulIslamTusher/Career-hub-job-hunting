import { useEffect, useState } from 'react';
import PageTopStyle from './PageTopStyle';
import TotalSingleCard from './TotalSingleCard';


const TotalCard = () => {
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        fetch('/public/companyDetails.json')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, [])


    return (
        <div>
            <PageTopStyle>Apply More For Your Carrier</PageTopStyle>
            {
                companies.map(company => <TotalSingleCard company={company}></TotalSingleCard>)
            }

        </div>
    );
};

export default TotalCard;