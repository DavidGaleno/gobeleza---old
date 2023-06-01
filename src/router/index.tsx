import { createBrowserRouter } from "react-router-dom";
import { LoginScreen } from "../views/loginScreen";
import App from "../App";
import { ProductCatalogScreen } from "../views/ProductCatalogScreen";
import { CadastrarPessoaFisica } from "../views/CadastrarPessoaFísicaScreen";
import { CadastrarPessoaJuridica } from "../views/CadastrarPessoaJuridicaScreen";
import { DashboardScreen } from "../views/DashboardScreen";
import { CardPaymentScreen } from "../views/CardPaymentScreen";
import { PIXPaymentScreen } from "../views/PIXPaymentScreen";
import { PasswordRecoveryByEmailScreen } from "../views/PasswordRecoveryByEmailScreen";
import { PasswordRecoveryByPhoneScreen } from "../views/PasswordRecoveryByPhone";
import { RecoveryKeyScreen } from "../views/RecoveryKeyScreen";
import { SelectPasswordRecoveryOptionsScreen } from "../views/SelectPasswordRecoveryOptionsScreen";
import { SelectSubscribeOption } from "../views/SelectSubscribeOptionScreen";
import { SelectPaymentMethodOption } from "../views/SelectPaymentMethodOptions";
import { MinhaContaFuncionario } from "../views/MinhaContaFuncionario";
import { MinhaContaUsuario } from "../views/MinhaContaUsuario";
import { SaloonCatalogScreen } from "../views/SaloonCatalogScreen";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LoginScreen />
            },
            {
                path: '/catalogo_saloes',
                element: <SaloonCatalogScreen />
            },
            {
                path: '/catalogo_produtos',
                element: <ProductCatalogScreen />
            },
            {
                path: '/cadastrar_usuario',
                element: <CadastrarPessoaFisica />
            },
            {
                path: '/cadastrar_salao',
                element: <CadastrarPessoaJuridica />
            },
            {
                path: '/cadastrar_salao',
                element: <CadastrarPessoaJuridica />
            },
            {
                path: '/dashboard',
                element: <DashboardScreen />
            },
            {
                path: '/pagamento_cartao',
                element: <CardPaymentScreen />
            },
            {
                path: '/pagamento_PIX',
                element: <PIXPaymentScreen />
            },
            {
                path: '/recuperar_senha_email',
                element: <PasswordRecoveryByEmailScreen />
            },
            {
                path: '/recuperar_senha_telefone',
                element: <PasswordRecoveryByPhoneScreen />
            },
            {
                path: '/recuperar_senha_chave',
                element: <RecoveryKeyScreen />
            },
            {
                path: '/recuperar_senha_opcoes',
                element: <SelectPasswordRecoveryOptionsScreen />
            },
            {
                path: '/cadastrar_opcoes',
                element: <SelectSubscribeOption />
            },
            {
                path: '/pagamento_opcoes',
                element: <SelectPaymentMethodOption />
            },
            {
                path: '/minha_conta_funcionario',
                element: <MinhaContaFuncionario />
            },
            {
                path: '/minha_conta_usuario',
                element: <MinhaContaUsuario />
            },


        ]
    }
])