import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import './directory.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory  = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherProperties}) => (
                <MenuItem  key={id} {...otherProperties}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);