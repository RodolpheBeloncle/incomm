import Settings from './block.json'
import { resetAttributes } from '../utils'
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/blockEditor'
import { PanelBody, Button } from '@wordpress/components'

export default function Inspecteur(props) {
  const { setAttributes } = props
  return (
    <InspectorControls>
      <PanelBody title={__('Réinitialisation', 'ocade-blocks')} initialOpen={false}>
        <Button
          isPrimary
          onClick={ () => { setAttributes(resetAttributes(Settings)) } }
        >
          Paramètres par Défaut (Reset)
        </Button>
      </PanelBody>
    </InspectorControls>
  )
} 