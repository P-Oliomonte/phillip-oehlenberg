import styled from "styled-components";

export default function ResumeCategory({ data }) {
  return (
    <CategoryContainer>
      <CategoryTitle>{data.title}</CategoryTitle>
      {data.entries.map((entry) => {
        return (
          <EntryCard key={entry.place}>
            <EntryDate>{entry.date}</EntryDate>
            <EntryPlace>{entry.place}</EntryPlace>
            <EntryType>{entry.type}</EntryType>
            {entry.description && (
              <EntryDescription>{entry.description}</EntryDescription>
            )}
            {entry.clients && (
              <EntryClients>
                <strong>Clients: </strong>
                {entry.clients}
              </EntryClients>
            )}
            {entry.degree && (
              <EntryDegree>
                <strong>Degree: </strong>
                {entry.degree}
              </EntryDegree>
            )}
          </EntryCard>
        );
      })}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.section`
  padding-bottom: 50px;
`;

const EntryCard = styled.div`
  box-shadow: 8px 8px #000;
  background-color: #fff;
  border: 3px solid #000;
  margin-top: 25px;
  border-radius: 0 0 8px 8px;
`;

const EntryDate = styled.h5`
  background-color: #000;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 450;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: 2px solid #000;
`;

const EntryPlace = styled.h3`
  font-size: 1.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

const EntryType = styled.h4`
  font-size: 1.2rem;
  font-weight: 450;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  border-top: 2px solid #000;
`;

const EntryDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 10px;
  border-top: 2px solid #000;
`;

const CategoryTitle = styled.h2`
  color: #fff;
  background-color: #000;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 1.6rem;
`;

const EntryClients = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 10px;
  border-top: 2px dotted #000;
`;

const EntryDegree = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 10px;
  border-top: 2px solid #000;
`;
