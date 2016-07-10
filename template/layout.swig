<!DOCTYPE html>
<html>
<head>
    {% block meta %}{% endblock %}
    <meta charset="utf-8">
    <title>{% block title %}{% endblock %}</title>

    <link rel="stylesheet" type="text/css" href="./build/vendor.min.css">
    <link rel="stylesheet" type="text/css" href="./build/common.css">
    {% block style %}{% endblock %}
</head>
<body>
    <div class="container">
        {% include 'partials/_topbar.swig' %}
        {% include 'partials/_topbanner.swig' %}
        {% include 'partials/_navibar.swig' %}
        
        {% block content %}{% endblock %}

        {% include 'partials/_footer.swig' %}
        {% include 'partials/_registration.swig' %}
    </div>

    <script src="./build/vendor.min.js" type="text/javascript"></script>
    <script src="./build/common.js" type="text/javascript"></script>
    {% block script %}{% endblock %}
</body>
</html>