import React, {useState}from 'react'
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';

const Crud = () => {
  const [codigo, setCodigo] = useState();
  const [fecha, setFecha] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [tratamiento, setTratamiento] = useState('');
  const [medico, setMedico] = useState('');
  const [lista, setLista] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false); // inicia deshabilitado.

  const generarID = () => {
    return Math.floor(Math.random() * 100000000);
  };

  const llenarCampos = (dato) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ` El campo: ${dato} esta vacio`,
    });
  };

  const agregarUsuarios = (e) => {
    e.preventDefault(); //evita que se recargue la pagina
    if (fecha.trim() === '') {
      llenarCampos('fecha');
      return;
    }
    if (nombre.trim() === '') {
      llenarCampos('nombre');
      return;
    }
    if (direccion.trim() === '') {
      llenarCampos('direccion');
      return;
    }
    if (telefono.trim() === '') {
      llenarCampos('telefono');
      return;
    }
    if (diagnostico.trim() === '') {
      llenarCampos('diagnostico');
      return;
    }
    if (tratamiento.trim() === '') {
      llenarCampos('tratamiento');
      return;
    }
    if (medico.trim() === '') {
      llenarCampos('medico');
      return;
    }

    //setPersona({fecha,nombre,direccion,telefono}) //agrega los datos al objeto persona
    const usuario = { codigo: generarID(), fecha, nombre, direccion, telefono, diagnostico, tratamiento, medico };
    setLista([...lista, usuario]); //agrega los datos al array lista

    //limpiar campos
    setFecha('');
    setNombre('');
    setDireccion('');
    setTelefono('');
    setDiagnostico('');
    setTratamiento('');
    setMedico('');
    setTelefono('');

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Datos guardados',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const editar = (persona) => {
    setCodigo(persona.codigo);
    setFecha(persona.fecha);
    setNombre(persona.nombre);
    setDireccion(persona.direccion);
    setTelefono(persona.telefono);
    setDiagnostico(persona.diagnostico);
    setTratamiento(persona.tratamiento);
    setMedico(persona.medico);
    setModoEdicion(true);
  };

  const guardarCambios = (e) => {
    e.preventDefault();
    if (fecha.trim() === '') {
      llenarCampos('fecha');
      return;
    }
    if (nombre.trim() === '') {
      llenarCampos('nombre');
      return;
    }
    if (direccion.trim() === '') {
      llenarCampos('direccion');
      return;
    }
    if (telefono.trim() === '') {
      llenarCampos('telefono');
      return;
    }
    if (diagnostico.trim() === '') {
      llenarCampos('diagnostico');
      return;
    }
    if (tratamiento.trim() === '') {
      llenarCampos('tratamiento');
      return;
    }
    if (medico.trim() === '') {
      llenarCampos('medico');
      return;
    }
    const editado = lista.map((persona) =>
      persona.codigo === codigo
        ? { codigo, fecha, nombre, direccion, telefono, diagnostico, tratamiento, medico }
        : persona
    );
    setLista(editado);
    setModoEdicion(false);

    setFecha('');
    setNombre('');
    setDireccion('');
    setTelefono('');
    setDiagnostico('');
    setTratamiento('');
    setMedico('');

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Datos Actualizados',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const eliminar = (codigo) => {
    //2 parametros, el primero es el item y el segundo es el index

    Swal.fire({
      title: 'Estas seguro de eliminar el registro?',
      text: 'No podras revertir esta accion!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        const filtro = lista.filter((persona) => persona.codigo !== codigo);
        setLista(filtro);
        Swal.fire('Eliminado!', 'El registro ha sido eliminado.', 'success');
      }
    });
  };

  const tableCustomStyles = {
    headCells: {
      style: {
        backgroundColor: '#473b6c',
        color: 'white',
        fontweight: 'bold',
      },
    },
  };
  return (
    <div className='container py-5'>
      <h1 className='text-center'>Hospital General</h1>
      <h1 className='text-center'>Formulario Médico</h1>
      <form className='form-group'>
        <input
          type='date'
          placeholder='Fecha'
          className='form-control mb-3'
          value={fecha}
          onChange={(e) => {
            setFecha(e.target.value);
          }} //e.target.value es el valor que se ingresa en el input
        />
        <input
          type='text'
          placeholder='nombre'
          className='form-control mb-3'
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <input
          type='text'
         
          placeholder='direccion'
          className='form-control mb-3'
          value={direccion}
          onChange={(e) => {
            setDireccion(e.target.value);
          }}
        />
        <input
          type='number'
          min={0}
          max={100}
          placeholder='telefono'
          className='form-control mb-3'
          value={telefono}
          onChange={(e) => {
            setTelefono(e.target.value);
          }}
        />
        <input
          type='text'
         
          placeholder='diagnostico'
          className='form-control mb-3'
          value={diagnostico}
          onChange={(e) => {
            setDiagnostico(e.target.value);
          }}
        />

        <input
          type='text'
         
          placeholder='tratamiento'
          className='form-control mb-3'
          value={tratamiento}
          onChange={(e) => {
            setTratamiento(e.target.value);
          }}
        />
        <input
          type='text'
         
          placeholder='medico'
          className='form-control mb-3'
          value={medico}
          onChange={(e) => {
            setMedico(e.target.value);
          }}
        />

        {/* Generado el boton con dos estados (actualizar y Editar.) */}

        {modoEdicion ? (
          <button
            className='btn btn-warning btn-block'
            onClick={(e) => {
              guardarCambios(e);
            }}
            type='submit'
          >
            Guardar Cambios
          </button>
        ) : (
          <button
            className='btn btn-primary btn-block'
            onClick={(e) => {
              agregarUsuarios(e);
            }}
          >
            <i className='bi bi-plus-circle-fill'> Agregar Usuario</i>
          </button>
        )}
      </form>

      <div className='container py-5'>
        <h1>Lista de personas</h1>
        <DataTable
          customStyles={tableCustomStyles}
          columns={[
            {
              name: 'codigo',
              selector: (row) => row.codigo,
              sortable: true,
            },
            {
              name: 'fecha',
              selector: (row) => row.fecha,
              sortable: true,
            },
            {
              name: 'nombre',
              selector: (row) => row.nombre,
              sortable: true,
            },
            {
              name: 'direccion',
              selector: (row) => row.direccion,
              sortable: true,
            },
            {
              name: 'telefono',
              selector: (row) => row.telefono,
              sortable: true,
            },
            {
              name: 'diagnostico',
              selector: (row) => row.diagnostico,
              sortable: true,
            },
            {
              name: 'tratamiento',
              selector: (row) => row.tratamiento,
              sortable: true,
            },
            {
              name: 'medico',
              selector: (row) => row.medico,
              sortable: true,
            },
            {
              name: 'Acciones',
              cell: (row) => (
                <div>
                  <button
                    className='btn btn-primary'
                    onClick={() => {
                      editar(row);
                    }}
                  >
                    <i className='bi bi-pencil-square'></i>
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => {
                      eliminar(row.codigo);
                    }}
                  >
                    <i className='bi bi-trash'></i>
                  </button>
                </div>
              ),
            },
          ]}
          data={lista}
          pagination
          paginationComponentOption={{
            rowsPerPageText: 'Filas por Página',
            rangeSeparatorText: 'de',
            noRowsPerPage: false,
            selectAllRowsItemText: 'Todos',
          }}
          highLightOnHover
          pointerOnHover
          fixedHeader
        />
      </div>
    </div>
  );
}

export default Crud