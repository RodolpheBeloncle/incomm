
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import Icon from './custom-icon'
import Edit from './edit';
import save from './save';

registerBlockType(metadata.name, {
  title: __("File d'ariane", 'blocks'),
  description: __("Ajouter un file d'ariane (supprime celui par défault)", 'blocks'),
  icon: Icon,
  edit: Edit,
  save
});
