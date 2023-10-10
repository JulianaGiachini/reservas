$('a').click(function(event){
    event.preventDefault();
    if(!$(this).hasClass('btn')){
        $('a').removeClass('active disabled');
        $(this).addClass('active disabled');
    }
    controleDeRotas($(this).attr("href"));
});



function gerarSwal(urlSucesso){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success me-2',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Sair?',
      text: "Você realmente deseja sair da aplicação?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-thumbs-up"></i> Sim!',
      cancelButtonText: '<i class="fa-solid fa-thumbs-down"></i> Não!',
      reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href=urlSucesso;
        }
    });

}

    function alertaSucesso(mensagem){
        Swal.fire({
            position: 'top-end',
            toast: true,
            icon: 'success',
            title: mensagem,
            showConfirmButton: false,
            timer: 2000
             });
}
 function alertaErro(mensagem){
        Swal.fire({
            position: 'top-end',
            toast: true,
            icon: 'error',
            title: mensagem,
            showConfirmButton: false,
            timer: 2000
             });
}