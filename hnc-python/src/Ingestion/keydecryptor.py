import base64

from cryptography.fernet import Fernet
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

# from DataIngestion.encrypted_keys_file import *

# PLACE YOUR KEYS HERE FOR ENCRYPTION
##########################################################################################
# TWITTER_CONSUMER_KEY = ''
# TWITTER_CONSUMER_SECRET = ''
# TWITTER_KEY = ''
# TWITTER_SECRET_KEY = ''
##########################################################################################
# Generate keys if doing for first time .. Keep this safe dont generate if a key has been given to you for decryption
# key = Fernet.generate_key()
# key = 'PUT KEY HERE'


class DecryptAPIKeys:
    """
    class to decrypt twitter api keys
    """
    def __init__(self, password):
        self.password = password
        self.cipher_key = self.__parse_password()
        self.api_key_list = []
        self.cipher_obj = Fernet(self.cipher_key)

    def __parse_password(self):
        salt = b'G\x0c\x87\xb1+\xf0\x95\x92xCEl\xefn4H'
        kdf = PBKDF2HMAC(algorithm=hashes.SHA256(),

                         length=32,
                         salt=salt,
                         iterations=100000,
                         backend=default_backend()
                         )
        cipher_key = base64.urlsafe_b64encode(kdf.derive(self.password.encode()))
        return cipher_key

    def encrypt_keys(self, raw_input):
        if isinstance(raw_input, str):
            return self.cipher_obj.encrypt(raw_input.encode())
        elif isinstance(raw_input, list):
            return [self.cipher_obj.encrypt(i.encode()) for i in raw_input]
        else:
            return "Error! input must Str or List(Str)"

    def decrypt_keys(self, encrypted_input):
        """
        Func to use instantiated key var to decrypt already encrypted byte strings
        """
        if isinstance(encrypted_input, bytes):
            return self.cipher_obj.decrypt(encrypted_input).decode()
        elif isinstance(encrypted_input, list):
            return [self.cipher_obj.decrypt(token.encode()).decode() for token in encrypted_input]


if __name__ == "__main__":
    cipher_suite = DecryptAPIKeys(input("Input Password: "))
    key_list = [TWITTER_KEY, TWITTER_SECRET_KEY, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET]
    decoded_text = cipher_suite.decrypt_keys(key_list)
    # checks
    print('-----------------------------------')
    # for printing the encrypted keys in order
    for i in decoded_text:
        print(i)
