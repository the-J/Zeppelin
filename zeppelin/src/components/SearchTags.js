import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getNotSelectedtags } from '../selectors';

const SearchTags = ( { addTag, options } ) => (
    <Dropdown
        placeholder='Szukaj'
        fluid
        search
        selection
        multiple
        closeOnChange
        onChange={( e, { value } ) => addTag(value[ 0 ])}
        value={[]}
        options={options}
    />
);

const mapStateToProps = ( state, ownProps ) => ({
    options: getNotSelectedtags(state).map(item => {
        return { key: item, value: item, text: item };
    })
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    addTag: name => dispatch({ type: 'ADD_TAG', payload: name })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchTags);
