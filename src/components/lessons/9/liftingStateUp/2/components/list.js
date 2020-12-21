import React from 'react';
import styled from 'styled-components';

const Row = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Container = styled.ul`
  padding-inline-start: 20px;
`;

const Label = styled.span`
  color: #001f3f;
`;

const Button = styled.button`
  font-weight: bold;
  color: #ffffff;
  background-color: #0074d9;
  border-radius: 4px;
  padding: 4px;
  padding-right: 10px;
  padding-left: 10px;
`;

const ResetButton = styled(Button)`
  background-color: #ff851b;
  margin-left: 10px;
  margin-right: 8px;
`;

const ArchivedLabel = styled(Label)`
  margin-left: 24px;
  font-size: 12px;
`;

const byArchived = (state) => (item) =>
  !state.includes(item.id);

const List = ({ className, list,state,setState }) => {


  const handleArchive = (id) => {
    setState(state =>[...state,id])
 
    
  };

  return (
    <React.Fragment>
      <Container className={className}>
        {list.filter(byArchived(state)).map((item) => (
          <Row key={item.id}>
            <Label>{item.name}</Label>
            <Button type="button" onClick={() => handleArchive(item.id)}>
              Archive
            </Button>
          </Row>
        ))}
      </Container>
      <ArchivedLabel>
        {state.length} item{state.length === 1 ? '' : 's'}{' '}
        archived...
      </ArchivedLabel>
      {state.length > 0 && (
        <ResetButton onClick={() => setState([])}>
          Reset Archived
        </ResetButton>
      )}
    </React.Fragment>
  );
};

export { List };
export default List;
