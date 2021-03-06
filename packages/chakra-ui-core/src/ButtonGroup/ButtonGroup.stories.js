import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/vue'
import { Button, ButtonGroup } from '..'

storiesOf('UI | ButtonGroup', module)
  .add('Button Group', () => ({
    components: { Button, ButtonGroup },
    template: `
      <div>
      <ButtonGroup variant-color="blue" is-attached>
        <Button variant="outline">Button 1</Button>
        <Button>Button 2</Button>
        <Button variant="outline">Button 3</Button>
      </ButtonGroup>
      </div>
    `,
    methods: { action: action('Button Clicked') }
  }))
