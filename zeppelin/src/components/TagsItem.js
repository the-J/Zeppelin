import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getSelectedtags } from '../selectors';

const TagsItem = ( { name, isSelected, selectIngredient } ) => (
    <Label
        color={isSelected ? 'blue' : undefined}
        onClick={() => selectIngredient(name)}
        as="a"
    >
        {
            isSelected && <Icon name="checkmark" />
        }
        #{name}
    </Label>
);

const mapStateToProps = ( state, ownProps ) => ({
    isSelected: getSelectedtags(state).includes(ownProps.name)
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    selectIngredient: name => dispatch({ type: 'SELECT_TAG', payload: name })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagsItem);
