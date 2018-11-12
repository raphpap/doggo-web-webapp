// Vendor
import React, {ChangeEventHandler, FormEventHandler} from 'react';

// Shared components
import ErrorMessage from 'doggo/ui/@components/error-message';

// Components
import Button from './button';
import ButtonRow from './button-row';
import Image from './image';
import TextField from './text-field';

// Types
interface Props {
  imageSrc: string;
  onClose: () => void;
  onSubmit: (cardName: string, imageSrc: string) => void;
}

interface State {
  cardName: string;
  hasError: boolean;
  isDirty: boolean;
}

const cardNameHasError = (cardName: string) => cardName === '';

export class Form extends React.Component<Props, State> {
  public readonly state: State = {
    cardName: '',
    hasError: false,
    isDirty: false
  };

  public render() {
    const {imageSrc, onClose} = this.props;
    const {cardName, hasError, isDirty} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="card-name"
          error={!isDirty && hasError}
          placeholder="Card Name"
          type="text"
          value={cardName}
          onChange={this.handleCardName}
        />

        {!isDirty && hasError && (
          <ErrorMessage message="Enter a name for your card" />
        )}

        <Image src={imageSrc} />

        <ButtonRow>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Confirm</Button>
        </ButtonRow>
      </form>
    );
  }

  private handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    const {onSubmit, imageSrc} = this.props;
    const {cardName} = this.state;

    this.setState({
      hasError: cardNameHasError(cardName),
      isDirty: false
    });

    if (!cardNameHasError(cardName)) {
      onSubmit(cardName, imageSrc);
    }
  };

  private handleCardName: ChangeEventHandler<HTMLInputElement> = event => {
    const cardName = event.target.value;

    this.setState({
      cardName,
      hasError: cardNameHasError(cardName),
      isDirty: true
    });
  };
}

export default Form;
