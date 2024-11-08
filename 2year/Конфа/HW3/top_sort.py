sorted_graph = []
visited = set()


def top_sort(graph):
    while len(sorted_graph) != len(graph):
        for node in graph:
            # Если узел не в графе посещённых элементов
            if node not in visited:
                # Помечаем посещённой
                visited.add(node)
                # Проходимся по детям
                check_children(graph[node], graph)
    return sorted_graph


def check_children(head, graph):
    visited.add(head)
    if head in sorted_graph:
        return
    # Рекурсивно проходимся по детям
    for node in head.dependencies:
        if node in graph:
            check_children(graph[node], graph)
    sorted_graph.append(head)
