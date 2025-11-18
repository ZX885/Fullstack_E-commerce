from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['is_admin'] = user.is_staff
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data['is_admin'] = self.user.is_staff
        return data
