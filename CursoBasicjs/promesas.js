function cargarFormularioRecurso(object){

        return new Promise(function(resolve,reject){
            $.ajax(object).done(function(data){

                $('#recursosModal').modal('show');

                $('#nombreRecurso').val(data.nombreRecurso);
                $('#referenciaRecurso').val(data.referenciaRecurso);
                $('#marcaRecurso').val(data.marcaRecurso);
                $('#modeloRecurso').val(data.modeloRecurso);
                $('#tipoRecurso').val(data.tipoRecurso);

                $('#condicionRecurso').val(data.condicionRecurso);

                $('#estadoRecurso').val(data.estadoRecurso);
                $('#idCat').val(data.idCat);
                $('.modal-title').text("Editar Recurso");
                $('#idRecurso').val(object.data.idRecurso);
                $('#action').val("Guardar Cambios");

                $('#icon-submit').html(" Guardar Cambios");
                $('#operation').val("Editar");


            let response = {tipoRecurso:data.tipoRecurso, idCategoriaRecurso:data.idCategoriaRecurso};

            resolve(response);
        }).fail(function(xhr, status, error){
           reject(error)
        })
    })
}

function cargarListaCategorias(obj){
    return new Promise(function(resolve,reject){
        let object = {
            url:"recursos/categoria.recursos.php",
            type:"POST",
            data:obj,
            contenType:'application/json'
        };

        $.ajax(object).done(function(data){
            $("#idCategoriaRecursos").html( decodeURIComponent(escape(data)) )
            resolve()
        }).fail(function(xhr, status, error){
           reject(error)
        })
    })
}

$(document).on('click', '.update', function(){
    let idRecurso = $(this).attr("idrecurso");
    let action = "recursos/single.recurso.php";
    let method = "POST";
    let dataType = "json";
    let payload ={idRecurso:idRecurso};

    let object = {url:action, type:method, dataType:dataType,data:payload};

    cargarFormularioRecurso(object)
    .then(resultado =>{
        cargarListaCategorias(resultado)
    })
    .catch(err =&gt; console.log('Se presentó un error: ' + err))
});
