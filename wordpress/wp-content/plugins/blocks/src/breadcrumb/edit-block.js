import { __ } from '@wordpress/i18n'

export default function Block( props ) {
  const { blockProps } = props

	return (
		<div { ...blockProps }>
      <p>fil d'ariane</p>  
		</div>
	)
}
 