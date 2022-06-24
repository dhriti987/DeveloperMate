from rest_framework import serializers
from chat.models import Message, MessageThread

class MessageSerializer(serializers.ModelSerializer):
    timestamp = serializers.DateTimeField(format="%d/%b/%y %H:%M:%S",read_only = True)
    sent_by = serializers.ReadOnlyField(source = 'sent_by.profile.fullname')
    class Meta:
        model = Message
        fields = "__all__"

class MessageThreadSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many = True, read_only = True)
    first_user = serializers.ReadOnlyField(source = 'first_user.profile.fullname')
    second_user = serializers.ReadOnlyField(source = 'second_user.profile.fullname')
    class Meta:
        model = MessageThread
        fields = ['id','first_user','second_user','messages']