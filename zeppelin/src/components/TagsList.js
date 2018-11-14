import React from 'react';
import { Label } from 'semantic-ui-react';
import TagsItem from './TagsItem';

const TagsList = ( { tags } ) => {
    return (
        <Label.Group>
            {tags.map(tag => <TagsItem name={tag} key={tag} />)}
        </Label.Group>
    );
};

TagsList.defaultProps = {
    tags: []
};

export default TagsList;
