import React from 'react';
import data from './data.json';
import PropTypes from 'prop-types';

const PersonalInfo = ({ data }) => (
  <div className="personalInfo">
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);
PersonalInfo.propTypes  ={
  data: PropTypes.shape({
    _id: PropTypes.string,
    guid: PropTypes.string,
    isActive : PropTypes.bool,
    balance: PropTypes.number,
    age: PropTypes.number,
    name:PropTypes.object,
    company:PropTypes.string,
    email:PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    tags:PropTypes.array,
    range:PropTypes.array,
    friends:PropTypes.array,
  
  }),
 
}
class ShowPersonalInfo extends React.Component {
  state = { selectedCompanyId: 'disabled' };

  onSelect = (e) => {
    const selectedCompanyId = e.target.value;
    this.setState({ selectedCompanyId });
  };

  render() {
    const { companies } = this.props;
    const { selectedCompanyId } = this.state;
    const companyData = companies.find((i) => selectedCompanyId === i._id);
    return (
      <>
        <h3>Select person dossier</h3>
        <select value={selectedCompanyId} onChange={this.onSelect}>
          <option key="disabled" disabled value="disabled"></option>
          {companies.map((i) => (
            <option key={i._id} value={i._id}>
              {i._id}
            </option>
          ))}
        </select>
        {companyData && <PersonalInfo data={companyData} />}
        {console.log(companyData)}
      </>
    );
  }
}

const Task = () => {
  return (
    <div>
      <ShowPersonalInfo companies={data} />
    </div>
  );
};

export default Task;
