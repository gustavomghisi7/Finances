import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableWithoutFeedback } from 'react-native';
import { Container, Tipo, IconView, TipoText, ValorText, DataText} from './styles';

export default function HistoricoList({ data, deleteItem }) {
    return (
        <TouchableWithoutFeedback onLongPress={ () => deleteItem(data)}>
            <Container>
                <Tipo>
                    <IconView tipo={data.tipo}>
                        <Icon
                            name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
                            color='#FFF'
                            size={20}
                        />
                        <TipoText>{data.tipo}</TipoText>
                    </IconView>
                </Tipo>
                <ValorText>
                    R${data.valor}
                </ValorText>
                <DataText>
                    Data:{data.date}
                </DataText>
            </Container>
        </TouchableWithoutFeedback>
    );
}