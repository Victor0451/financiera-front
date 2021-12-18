import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layouts/Layout';
import jsCookie from 'js-cookie'
import axios from 'axios';
import toastr from 'toastr';
import { ip, interest } from '../../config/config'
import Spinner from '../../components/Layouts/Spinner'
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert';
import ListadoCreditos from '../../components/creditos/ListadoCreditos';
import ModalRegistrarCliente from '../../components/creditos/ModalRegistrarCredito';

const Creditos = () => {

    let idClienteRef = React.createRef();
    let dniRef = React.createRef();
    let cuotasRef = React.createRef();
    let prestamoRef = React.createRef();
    let vendedorRef = React.createRef();

    const [cuoprest, guardarCuoprest] = useState(null);
    const [capadev, guardarCapadev] = useState(null);
    const [flag, guardarFlag] = useState(false);



    const [user, guardarUsuario] = useState(null);
    const [row, guardarRow] = useState([]);
    const [listado, guardarListado] = useState([]);
    const [planCuotas, guardarPlanCuotas] = useState([]);
    const [empleados, guardarEmpleados] = useState([]);
    const [cliente, guardarCliente] = useState([]);
    const [errores, guardarErrores] = useState(null);



    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData);
            }

            traerCreditos()

            traerPlanCuotas()

            traerEmpleados()

        }
    }, []);

    const traerCreditos = async () => {
        await axios.get(`${ip}api/creditos/listadocreditos`)
            .then(res => {
                if (res.status === 200) {
                    toastr.success("Se genero el listado de creditos", "ATENCION")
                    guardarListado(res.data)
                }
            }).catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

    }

    const traerPlanCuotas = async () => {
        await axios.get(`${ip}api/creditos/listadoplancuotas`)
            .then(res => {
                if (res.status === 200) {
                    guardarPlanCuotas(res.data)
                }
            }).catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

    }

    const traerEmpleados = async () => {
        await axios.get(`${ip}api/creditos/listadoempleados`)
            .then(res => {
                if (res.status === 200) {
                    guardarEmpleados(res.data)
                }
            }).catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

    }

    const buscarCliente = async () => {

        guardarErrores(null)

        if (idClienteRef.current.value === "" && dniRef.current.value === "") {
            toastr.warning("Debes ingresar el N° de cliente o el DNI para buscar al cliente", "ATENCION")
            guardarErrores("Debes ingresar el N° de cliente o el DNI para buscar al cliente")

        } else if (idClienteRef.current.value !== "" && dniRef.current.value !== "") {
            toastr.warning("No puedes buscar por N° de Cliente y DNI a la ves. Elige un dato y vuelve a intentarlo", "ATENCION")
            guardarErrores("No puedes buscar por N° de Cliente y DNI a la ves. Elige un dato y vuelve a intentarlo")

        } else if (idClienteRef.current.value !== "") {

            await axios.get(`${ip}api/clientes/existeidcliente/${idClienteRef.current.value}`)
                .then(res => {
                    if (res.data) {
                        toastr.success(`Cliente encontrado: ${res.data.apellido}, ${res.data.nombre}`, "ATENCION")
                        guardarCliente(res.data)
                    } else {
                        toastr.info("El cliente solicitado no esta registrado", "ATENCION")
                        guardarCliente([])
                        guardarErrores("El cliente solicitado no esta registrado")
                    }
                })

        } else if (dniRef.current.value !== "") {

            await axios.get(`${ip}api/clientes/existedni/${dniRef.current.value}`)
                .then(res => {
                    if (res.data) {
                        toastr.success(`Cliente encontrado: ${res.data.apellido}, ${res.data.nombre}`, "ATENCION")
                        guardarCliente(res.data)
                    } else {
                        toastr.info("El cliente solicitado no esta registrado", "ATENCION")
                        guardarCliente([])
                        guardarErrores("El cliente solicitado no esta registrado")
                    }
                })
        }

    }

    const calculoPrestamo = () => {
        //e.preventDefault();

        guardarFlag(false);

        let principal = parseInt(prestamoRef.current.value);

        let payments = parseInt(cuotasRef.current.value);
        let x = Math.pow(1 + interest, payments);
        let monthly = ((principal * x * interest) / (x - 1)).toFixed(0);

        guardarCuoprest(monthly);

        let capadev = monthly * payments;

        guardarCapadev(capadev);

        guardarFlag(true);
    };

    const verCredito = (row) => {
        guardarRow(row)

    }

    return (
        <Layout>

            {/* {listado.length === 0 ? <Spinner />
                : (
                    <>
                        <ListadoCreditos listado={listado} />

                        <ModalRegistrarCliente />
                    </>
                )
            } */}


            <ListadoCreditos
                listado={listado}

            />

            <ModalRegistrarCliente
                planCuotas={planCuotas}
                empleados={empleados}
                cliente={cliente}
                idClienteRef={idClienteRef}
                dniRef={dniRef}
                prestamoRef={prestamoRef}
                vendedorRef={vendedorRef}
                cuotasRef={cuotasRef}
                buscarCliente={buscarCliente}
                errores={errores}
                cuoprest={cuoprest}
                capadev={capadev}
                calculoPrestamo={calculoPrestamo}
                flag={flag}
            />

        </Layout>
    )
}

export default Creditos
