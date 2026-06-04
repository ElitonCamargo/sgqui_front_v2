$(function () {
    $.extend(true, $.fn.dataTable.defaults, {
        pagingType: 'simple_numbers',
        "pageLength": 10,
        "lengthMenu": [[5,10, 50, 100, 500, -1], [5,10, 50, 100, 500, "Todos"]],
        language: {
            buttons: {
                copy: "Copiar para Excel",
                print: 'Imprimir',
                copyTitle: 'Copiado para Excel',
                copyKeys: 'Pressione <i> ctrl </ i> ou <i> \ u2318 </ i> + <i> C </ i> para copiar os dados da tabela para a área de transferência. <br> <br> Para cancelar, clique nesta mensagem ou pressione Esc.',
                copySuccess: {
                    _: '%d registros copiados',
                    1: '1 registro copiado'
                }
            },
            "emptyTable": "Nenhum dado disponível na tabela",
            "info": "Mostrando de _START_ à _END_ de _TOTAL_ entradas",
            "infoEmpty": "Mostrando 0 de 0 a 0 entradas",
            "infoFiltered": "(filtrando de _MAX_ entradas totais)",
            "infoPostFix": "",
            "lengthMenu": "Mostrar _MENU_ entradas",
            "loadingRecords": "Carregando...",
            "processing": "Processando...",
            "search": "Busca em Tudo:",
            "zeroRecords": "Nenhum registro correspondente encontrado!",
            "paginate": {
                "first": "Primeiro",
                "last": "Último",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": ativar para classificar coluna ascendente",
                "sortDescending": ": ativar para classificar coluna descendente"
            },
            "decimal": ",",
            "thousands": "."
        }
    });

});

function initBootstrapTooltipsIn(container) {
    if (typeof bootstrap === 'undefined') return;
    const root = container || document;
    const elements = root.querySelectorAll('.btn[title], button[title], a[title].btn');

    elements.forEach((el) => {
        el.setAttribute('data-bs-toggle', 'tooltip');
        if (!el.getAttribute('data-bs-placement')) {
            el.setAttribute('data-bs-placement', 'top');
        }

        const existing = bootstrap.Tooltip.getInstance(el);
        if (existing) {
            existing.dispose();
        }

        new bootstrap.Tooltip(el);
    });
}

window.getStandardDataTableLanguage = function getStandardDataTableLanguage(overrides) {
    return $.extend(true, {}, $.fn.dataTable.defaults.language || {}, overrides || {});
};

// Inicializador padrão para manter comportamento consistente entre tabelas.
window.createStandardDataTable = function createStandardDataTable(tableSelector, options) {
    if (!tableSelector) {
        return null;
    }

    const config = $.extend(true, {
        searching: true,
        drawCallback: function () {
            const tableNode = this && this.api ? this.api().table().container() : null;
            if (tableNode) initBootstrapTooltipsIn(tableNode);
        },
        initComplete: function () {
            const tableNode = this && this.api ? this.api().table().container() : null;
            if (tableNode) initBootstrapTooltipsIn(tableNode);
        }
    }, options || {});

    return $(tableSelector).DataTable(config);
};

// Padroniza filtros por coluna em qualquer DataTable do sistema.
window.setupDataTableColumnFilters = function setupDataTableColumnFilters(config) {
    const tableSelector = config && config.tableSelector;
    const dataTable = config && config.dataTable;
    const excludeTitles = (config && config.excludeTitles) || [];

    if (!tableSelector || !dataTable) {
        return;
    }

    const $thead = $(`${tableSelector} thead`);

    $thead.find('th').each(function () {
        const title = $(this).text().trim();
        if (!title || excludeTitles.includes(title)) {
            return;
        }
        $(this).html(`<input type="text" class="form-control form-control-sm" placeholder="${title} "/>`);
    });

    // Evita ordenar ao clicar no input de filtro.
    $thead.off('click.dtColFilter mousedown.dtColFilter', 'th input');
    $thead.on('click.dtColFilter mousedown.dtColFilter', 'th input', function (event) {
        event.stopPropagation();
    });

    $thead.off('input.dtColFilter keyup.dtColFilter', 'th input');
    $thead.on('input.dtColFilter keyup.dtColFilter', 'th input', function () {
        const visibleColumnIndex = $(this).closest('th').prevAll(':visible').length;
        dataTable.column(`${visibleColumnIndex}:visible`).search(this.value).draw();
    });
};

//filtra sem acentos
function accents_supr(data) {
    return !data ?
        '' :
        typeof data === 'string' ?
            data
                .replace(/\n/g, ' ')
                .toLowerCase()
                .replace(/[áàäâã]/g, 'a')
                .replace(/[éèëê]/g, 'e')
                .replace(/[íìïî]/g, 'i')
                .replace(/[óòöôõ]/g, 'o')
                .replace(/[úùüû]/g, 'u')
                .replace(/ç/g, 'c') :
            data;
}

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "brasil-string-asc": function (s1, s2) {
        return accents_supr(s1).localeCompare(accents_supr(s2));
    },
    "brasil-string-desc": function (s1, s2) {
        return accents_supr(s2).localeCompare(accents_supr(s1));
    }
});

// Busca global e por coluna sem acento para strings e HTML.
jQuery.fn.DataTable.ext.type.search.string = function (data) {
    return accents_supr(data);
};

jQuery.fn.DataTable.ext.type.search.html = function (data) {
    return accents_supr(data);
};

jQuery.fn.DataTable.ext.type.search['brasil-string'] = function (data) {
    return accents_supr(data);
};

//clear filters

