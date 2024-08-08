import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import Toolbar from './edit-toolbar';
import Inspecteur from './edit-inspecteur';
import Block from './edit-block';

/** import image de preview.png */
import Preview from './preview.png';

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { preview } = attributes;

  const blockProps = useBlockProps();

  /** Quand l'utilisateur est dans le selecteur de blocks. */
  if (preview) return (
    <div {...blockProps}>
      <img src={Preview} />
    </div>
  );

  return <>
    <Toolbar {...{ blockProps, attributes, setAttributes }} />
    <Inspecteur {...{ blockProps, attributes, setAttributes }} />
    <Block   {...{ blockProps, attributes, setAttributes }} />
  </>
}
